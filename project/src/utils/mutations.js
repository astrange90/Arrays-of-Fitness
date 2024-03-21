import gql from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
// need to update authors from list below
export const SAVE_EXERCISE = gql`
  mutation saveExercise($exerciseData: ExerciseInput!) {
    saveExercise(exerciseData: $exerciseData) {
      _id
      username
      email
      savedExercise {
        exerciseId
        authors
        image
        description
        title
        link
      }
    }
  }
`;

export const REMOVE_Exercise = gql`
  mutation removeExercise($exerciseId: ID!) {
    removeExercise(exerciseId: $exerciseId) {
      _id
      username
      email
      savedExercise {
        exerciseId
        authors
        image
        description
        title
        link
      }
    }
  }
`;