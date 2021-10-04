const supertest = require("supertest");
const request = supertest("http://localhost:8080");

test("GET started", () => {
    return request.get("/").expect(res => expect(res.status).toBe(200));
});

test("GET users", () => {
    return request.get("/users").set('API-KEY', `202217`).expect(res => expect(res.status).toBe(200));
});

test("GET users by ID", () => {
    return request.get("/users/1").set('API-KEY', `202217`).expect(res => expect(res.status).toBe(200));
});

test("Update User", () => {
    const id = 1;
    var json = {
        name_user: "nome atualizado",
        email_user: "email.atualizado@email.com",
        phone_user: "(11) 11111-1111",
        genre_user: "genero atualizado",
        birth_user: "01-01-1900",
        nationality_user: "nacionalidade atualizada",
        path_image_user: "https://www.einerd.com.br/wp-content/uploads/2020/11/boruto-naruto-forma-final-e1606135074767-890x464.jpg",
        street_user_address: "rua atualizada",
        number_home_user_address: "17",
        city_user_address: "cidade atualizada",
        state_user_address: "estado atualizado",
        latitude_user_address: "latitude atualizada",
        longitude_user_address: "longitude atualizada"
    }

    return request.put("/users/" +id).send(json).set({'Accept': 'application/json', 'API-KEY': `202217`})
        .expect('Content-Type', /json/).then(res => expect(res.status).toBe(200));
});

test("Delete user by ID", () => {
    const id = 10;
    return request.delete("/users/" + id).set('API-KEY', `202217`).expect(res => expect(res.status).toBe(200));
});