/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProcess = /* GraphQL */ `
  subscription OnCreateProcess {
    onCreateProcess {
      id
      name
      description
      pictureurl
      steps {
        items {
          id
          stepnum
          name
          description
          pictureurl
          steptext
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          processStepsId
          stepsCodeId
        }
        nextToken
        startedAt
      }
      category {
        id
        name
        order
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      processCategoryId
    }
  }
`;
export const onUpdateProcess = /* GraphQL */ `
  subscription OnUpdateProcess {
    onUpdateProcess {
      id
      name
      description
      pictureurl
      steps {
        items {
          id
          stepnum
          name
          description
          pictureurl
          steptext
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          processStepsId
          stepsCodeId
        }
        nextToken
        startedAt
      }
      category {
        id
        name
        order
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      processCategoryId
    }
  }
`;
export const onDeleteProcess = /* GraphQL */ `
  subscription OnDeleteProcess {
    onDeleteProcess {
      id
      name
      description
      pictureurl
      steps {
        items {
          id
          stepnum
          name
          description
          pictureurl
          steptext
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          processStepsId
          stepsCodeId
        }
        nextToken
        startedAt
      }
      category {
        id
        name
        order
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      processCategoryId
    }
  }
`;
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
      id
      name
      order
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
      id
      name
      order
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
      id
      name
      order
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateSteps = /* GraphQL */ `
  subscription OnCreateSteps {
    onCreateSteps {
      id
      stepnum
      name
      description
      pictureurl
      steptext
      code {
        id
        codetextkey
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      processStepsId
      stepsCodeId
    }
  }
`;
export const onUpdateSteps = /* GraphQL */ `
  subscription OnUpdateSteps {
    onUpdateSteps {
      id
      stepnum
      name
      description
      pictureurl
      steptext
      code {
        id
        codetextkey
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      processStepsId
      stepsCodeId
    }
  }
`;
export const onDeleteSteps = /* GraphQL */ `
  subscription OnDeleteSteps {
    onDeleteSteps {
      id
      stepnum
      name
      description
      pictureurl
      steptext
      code {
        id
        codetextkey
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      processStepsId
      stepsCodeId
    }
  }
`;
export const onCreateCode = /* GraphQL */ `
  subscription OnCreateCode {
    onCreateCode {
      id
      codetextkey
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCode = /* GraphQL */ `
  subscription OnUpdateCode {
    onUpdateCode {
      id
      codetextkey
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCode = /* GraphQL */ `
  subscription OnDeleteCode {
    onDeleteCode {
      id
      codetextkey
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
