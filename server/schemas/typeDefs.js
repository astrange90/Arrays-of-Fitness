const typeDefs = `
  # Define which fields are accessible from the Class model
  type User {
    _id: ID
    username: String
    email: String
    age: Int
    height: Int
    weight: Int
    savedExercise:[Workout]
  }
  
  type Workout {
    _id: ID
    day: String
    exercises: [Exercise]
  }

  type Exercise {
  _id: ID
  name: String
  duration: Int
  distance: Int
  weight: Int
  reps: Int
  sets: Int

  }

  type Auth {
    token: ID!
    user: User
  }
  # Define which queries the front end is allowed to make and what data is returned
  type Query {
    workouts: [Workout]
    workout(workoutID: ID!): Workout
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, age: Int!, height: Int!, weight: Int!): Auth
    login(email: String!, password: String!): Auth
    addWorkout(day:String!):Workout
  }

`;

module.exports = typeDefs;
