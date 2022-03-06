export const postingRegistration = async (
  id,
  name,
  surname,
  email,
  phoneNumber,
  age,
  comment
) => {
  const url = `https://test-api.codingbootcamp.cz/api/02605eae/events/${id}/registrations`;
  const data = {
    id: id,
    name: name,
    surname: surname,
    email: email,
    phoneNumber: phoneNumber,
    age: age,
    comment: comment,
  };

  try {
    const post = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    const response = await post.json();
    console.log(response);
  } catch (e) {
    console.log(`There was an error: ${e}`);
  } finally {
  }
};
