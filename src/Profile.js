import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { Storage, Auth } from 'aws-amplify';
import { GalleryEditProfile } from './ui-components';

export default (props) => {
  //  props input needs to include a 'CognitoUser' reference. This
  //  is returned by Auth.currentAuthenticatedUser() call. The userInfo
  //  property passed into Profile through 'props' is a CognitoUser.
  console.log('props', props);

  const fileInput = useRef(null);
  const selectFile = () => {
    fileInput.current.click();
    console.log(fileInput);
  }

  //  we need to be able to refresh the page after a image upload
  //  event. We use useState() for overrides so that the value can
  //  exist on first render and can be updated after image returned
  //  from amplify storage S3 bucket
  const [uploadcount, updateUploadCount] = useState(0);
  const shadowpic = "https://gallerypubliccontent-bucket.s3.amazonaws.com/BlankProfilePic.png";
  const [profilepic, updateProfilePic] = useState(null);
  const [profilename, updateProfileName] = useState(
         props.userInfo ? props.userInfo.attributes.name :
         "");
  const [profileemail, updateProfileEmail] = useState(
         props.userInfo ? props.userInfo.attributes.email :
         "");

  const profileoverrides = {
    "GalleryEditProfile": {
      margin: 'auto'
    },
    "username": {
      children: props.userInfo ? props.userInfo.username :
                "not logged in"
    },
    "Button": {
      onClick: saveProfile
    },
    "UploadButton": {
      isDisabled: false,
      onClick: selectFile
    },
    "profilepic": {
      src: profilepic ? profilepic : shadowpic
    },
    "TextFieldName": {
      onChange: (event) => {nameChanged(event.target.value)},
      placeholder: profilename
    },
    "TextFieldEmail": {
      onChange: (event) => {emailChanged(event.target.value)},
      placeholder: profileemail
    }
  };

  //  useEffect (with dependency on uploadcount) will re-render
  //  the page whenever we change the count. i.e. after an upload
  //  event we want to change the pic in the profile.
  useEffect(() => {
    console.log('useeffect profilename', profilename);
  }, [uploadcount]);

  const handleFileChange = event => {
    const fileObj = event.target.files && event.target.files[0];
    console.log('file is ', fileObj.name);
    saveToS3(fileObj);
  }

  async function saveProfile(e) {
    console.log('save clicked');
    console.log('props.userInfo', props.userInfo);
    console.log('profilename', profilename);
    console.log('profileemail', profileemail);
    if (profilename != props.userInfo.attributes.name) {
      await Auth.updateUserAttributes(props.userInfo,
        {
          'name': profilename
        });
      props.userCheck();
    }
    if (profileemail != props.userInfo.attributes.email) {
      await Auth.updateUserAttributes(props.userInfo,
        {
          'email': 'ocdmoynihan@gmail.com'
        });
      props.userCheck();
    }
  }
  
  function nameChanged(value) {
    console.log('value', value);
    updateProfileName(value);
    console.log('profilename', profilename);
  }

  function emailChanged(value) {
    console.log('email', value);
    updateProfileEmail(value);
  }

  async function getImage() {
    if (props.userInfo) {
      console.log('userinfo is not null??');
      const imageObj = await Storage.get('profile/' + props.userInfo.username,
                                         {contentType: 'image/png',
                                          level: 'private'
                                         });
      console.log('retrieved pic', imageObj);
      updateProfilePic(imageObj);
      updateUploadCount(uploadcount+1);
    }
  }

  //  actually upload the image to S3 bucket.
  //  we need to see if the key already exists, if so, a Storage.remove()
  //  must be called first
  async function saveToS3(file) {
    if (props.userInfo.attributes.picture)
      await Storage.remove(props.userInfo.attributes.picture);
    const result = await Storage.put('profile/' + props.userInfo.username, 
                                     file, 
                                     { contentType: 'image/png',
                                       level: 'private'
                                     });
    if (result) {
      console.log('storage result', result);
      console.log('storage put result', result);
      await Auth.updateUserAttributes(props.userInfo, {"picture":result.key});
      props.userCheck();
      updateProfilePic(null);
    }
  }

  if (!profilepic && props.userInfo.attributes.picture)
    getImage();

  const userdata = props.userInfo ?
                     <div>whats up {props.userInfo.username} (email: {props.userInfo.attributes.email})</div> :
                     <div>no user logged in</div>

  const pickey = props.userInfo.attributes.picture ?
    console.log('user picture', props.userInfo.attributes.picture) :
    console.log('no user picture');

  return (
    <div>
      <input 
        type="file" accept="image/png"
        style={{ "display": "none" }} 
        ref={fileInput}
        onChange={handleFileChange} />
      <p />
      <h2>User Profile</h2>
      <p />
        {userdata}
      <div className="profilediv">
        <GalleryEditProfile overrides={profileoverrides} />
      </div>
    </div>
  );
};
