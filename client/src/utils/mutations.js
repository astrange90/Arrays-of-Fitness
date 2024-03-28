import { gql } from "@apollo/client/core";

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
  mutation saveExercise($exerciseData: ExerciseInput!, $addExerciseId: ID!) {
    saveExercise(exerciseData: $exerciseData) {
      _id
      day
      exercises {
      _id
      name
      duration
      distance
      weight
      reps
      sets
      }
    }
  }
`;

export const REMOVE_EXERCISE = gql`
  mutation removeExercise($exerciseId: ID!, $removeExerciseId: ID!) {
    removeExercise(exerciseId: $exerciseId, id: $removeExerciseId) {
      _id
      day
      exercises {
      _id
      name
      duration
      distance
      weight
      reps
      sets
      }
    }
  }
`;