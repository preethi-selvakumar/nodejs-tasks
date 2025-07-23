function doTask(callback) {
  const isSuccess = Math.random() > 0.5;

  if (isSuccess) {
    callback(null, "Task completed successfully");
  } 
  else {
    callback(new Error("Task failed"), null);
  }
}

doTask((err, result) => {
  if (err) {
    console.error("Error:", err.message);
  } 
  else {
    console.log("Success:", result);
  }
});
