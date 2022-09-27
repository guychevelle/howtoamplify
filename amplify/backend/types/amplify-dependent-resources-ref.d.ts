export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "howtoamplifyAuth": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "storage": {
        "howtoamplify": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "api": {
        "howtodb": {
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    }
}