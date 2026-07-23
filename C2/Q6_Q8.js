function meth() {
  const name = "Ayush";
  console.log(name);

  try {
    name = "Harry";
    console.log(name);
  } catch (error) {
    console.log(error.name + " : " + error.message);
  } finally {
    console.log("Executed...");
  }
}

meth();
