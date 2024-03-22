import gql from "graphql-tag";

// need to update authors from list below
export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      exerciseCount
      savedExercise {
        exerciseId
        type
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