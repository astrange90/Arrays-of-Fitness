export const getSavedExerciseIds = () => {
    const savedExerciseIds = localStorage.getItem('saved_exercise')
      ? JSON.parse(localStorage.getItem('saved_exercise'))
      : [];
  
    return savedExerciseIds;
  };
  
  export const saveExerciseIds = (exerciseIdArr) => {
    if (exerciseIdArr.length) {
      localStorage.setItem('saved_exercise', JSON.stringify(exerciseIdArr));
    } else {
      localStorage.removeItem('saved_exercise');
    }
  };
  
  export const removeExerciseId = (exerciseId) => {
    const savedExerciseIds = localStorage.getItem('saved_exercise')
      ? JSON.parse(localStorage.getItem('saved_exercise'))
      : null;
  
    if (!savedExerciseIds) {
      return false;
    }
  
    const updatedSavedExerciseIds = savedExerciseIds?.filter((savedExerciseId) => savedExerciseId !== exerciseId);
    localStorage.setItem('saved_exercise', JSON.stringify(updatedSavedExerciseIds));
  
    return true;
  };