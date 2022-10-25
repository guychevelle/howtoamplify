/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProcess = /* GraphQL */ `
  mutation CreateProcess(
    $input: CreateProcessInput!
    $condition: ModelProcessConditionInput
  ) {
    createProcess(input: $input, condition: $condition) {
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
export const updateProcess = /* GraphQL */ `
  mutation UpdateProcess(
    $input: UpdateProcessInput!
    $condition: ModelProcessConditionInput
  ) {
    updateProcess(input: $input, condition: $condition) {
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
export const deleteProcess = /* GraphQL */ `
  mutation DeleteProcess(
    $input: DeleteProcessInput!
    $condition: ModelProcessConditionInput
  ) {
    deleteProcess(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createSteps = /* GraphQL */ `
  mutation CreateSteps(
    $input: CreateStepsInput!
    $condition: ModelStepsConditionInput
  ) {
    createSteps(input: $input, condition: $condition) {
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
export const updateSteps = /* GraphQL */ `
  mutation UpdateSteps(
    $input: UpdateStepsInput!
    $condition: ModelStepsConditionInput
  ) {
    updateSteps(input: $input, condition: $condition) {
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
export const deleteSteps = /* GraphQL */ `
  mutation DeleteSteps(
    $input: DeleteStepsInput!
    $condition: ModelStepsConditionInput
  ) {
    deleteSteps(input: $input, condition: $condition) {
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
export const createCode = /* GraphQL */ `
  mutation CreateCode(
    $input: CreateCodeInput!
    $condition: ModelCodeConditionInput
  ) {
    createCode(input: $input, condition: $condition) {
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
export const updateCode = /* GraphQL */ `
  mutation UpdateCode(
    $input: UpdateCodeInput!
    $condition: ModelCodeConditionInput
  ) {
    updateCode(input: $input, condition: $condition) {
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
export const deleteCode = /* GraphQL */ `
  mutation DeleteCode(
    $input: DeleteCodeInput!
    $condition: ModelCodeConditionInput
  ) {
    deleteCode(input: $input, condition: $condition) {
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
