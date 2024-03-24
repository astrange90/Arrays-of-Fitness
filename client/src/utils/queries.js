import { gql } from "@apollo/client";

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