const supertest = require("supertest");
const request = supertest("http://localhost:8080");

test("GET started", () => {
    return request.get("/").expect(res => expect(res.status).toBe(200));
});

// USERS

test("GET users", () => {
    return request.get("/users").expect(res => expect(res.status).toBe(200));
});

test("GET users by ID", () => {
    return request.get("/users/1").expect(res => expect(res.status).toBe(200));
});

test("Create User", () => {
    var json = {
        name_user: "nome novo",
        email_user: "email.novo@email.com",
        password_user: "123456"
    }

    return request.post("/users/").send(json).set({'Accept': 'application/json'})
        .expect('Content-Type', /json/).then(res => expect(res.status).toBe(201));
});

test("Update User", () => {
    const id = 1;
    var json = {
        name_user: "nome atualizado",
        email_user: "email.atualizado@email.com",
        password_user: "123456"
    }

    return request.put("/users/" +id).send(json).set({'Accept': 'application/json'})
        .expect('Content-Type', /json/).then(res => expect(res.status).toBe(202));
});

test("Delete user by ID", () => {
    const id = 3;
    return request.delete("/users/" + id).expect(res => expect(res.status).toBe(202));
});

// MOVIES

test("GET movies", () => {
    return request.get("/movies").expect(res => expect(res.status).toBe(200));
});

test("GET movies by ID", () => {
    return request.get("/movies/1").expect(res => expect(res.status).toBe(200));
});

test("Create Movie", () => {
    var json = {
        name_movie: "movie insominia 1 created",
        releaseYear_movie: "2020"
    }

    return request.post("/movies").send(json).set({'Accept': 'application/json'})
        .expect('Content-Type', /json/).then(res => expect(res.status).toBe(201));
});

test("Update Movie", () => {
    const id = 2;
    var json = {
        name_movie: "movie insominia 1 created",
        releaseYear_movie: "2020"
    }

    return request.put("/movies/" +id).send(json).set({'Accept': 'application/json'})
        .expect('Content-Type', /json/).then(res => expect(res.status).toBe(202));
});

test("Delete Movie by ID", () => {
    const id = 2;
    return request.delete("/movies/" + id).expect(res => expect(res.status).toBe(202));
});

// MOVIE RATING USER

test("GET movies Ratings User", () => {
    return request.get("/movieratingbyusers").expect(res => expect(res.status).toBe(200));
});

test("Create Movie Ratings User", () => {
    var json = {
        userWatched: 1,
        userRating: 2,
        fk_user_id: 2,
        fk_movie_id: 1
    }

    return request.post("/movieratingbyuser").send(json).set({'Accept': 'application/json'})
        .expect('Content-Type', /json/).then(res => expect(res.status).toBe(201));
});

test("Update Movie Rating User", () => {
    const id = 3;
    var json = {
        userWatched: 1,
        userRating: 5,
    }

    return request.put("/movies/" +id).send(json).set({'Accept': 'application/json'})
        .expect('Content-Type', /json/).then(res => expect(res.status).toBe(202));
});

// COMMENTS

test("GET comment by movie rating user", () => {
    return request.get("/comments").expect(res => expect(res.status).toBe(200));
});

test("GET comment by User", () => {
    return request.get("/commentsbymovieratinguser/1").expect(res => expect(res.status).toBe(200));
});

test("Create Comment", () => {
    var json = {
        text_comment: "comentário feito pelo insomnia na avaliação do usuário de id 1",
        fk_id_user: 1,
        fk_id_movieratinguser: 1
    }

    return request.post("/comments").send(json).set({'Accept': 'application/json'})
        .expect('Content-Type', /json/).then(res => expect(res.status).toBe(201));
});

test("Update Comment", () => {
    const id = 1;
    var json = {
        text_comment: "comentário atualizado pelo insomnia"
    }

    return request.put("/comments/" +id).send(json).set({'Accept': 'application/json'})
        .expect('Content-Type', /json/).then(res => expect(res.status).toBe(202));
});

test("Delete comment by id", () => {
    const id = 2;
    return request.delete("/comments/" + id).expect(res => expect(res.status).toBe(202));
});