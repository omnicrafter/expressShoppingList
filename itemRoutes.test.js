const request = require("supertest");
const app = require("./app");

describe("Test the itemRoutes", () => {
  test("It should respond to the GET method", async () => {
    const response = await request(app).get("/items");
    expect(response.statusCode).toBe(200);
  });

  test("It should respond to the POST method", async () => {
    const newItem = { name: "Test", price: 10 };
    const response = await request(app).post("/items").send(newItem);
    expect(response.statusCode).toBe(201);
    expect(response.body.message).toBe(
      `Successfully added item: ${newItem.name}, $${newItem.price}`
    );
  });

  test("It should respond to the PATCH method", async () => {
    const updatedItem = { name: "Updated", price: 20 };
    const response = await request(app).patch("/items/Test").send(updatedItem);
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Information updated successfully!");
  });

  test("It should respond to the DELETE method", async () => {
    const response = await request(app).delete("/items/Updated");
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Item deleted successfully!");
  });
});
