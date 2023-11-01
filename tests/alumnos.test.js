const request = require('supertest');
const app = require('../index');

describe('GET /api/alumnos', () => {
    it('Debería retornar cod 200 con lista de alumnos', async () => {
        const res = await request(app)
            .get('/api/alumnos')
            .set('Accept', 'application/json');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    nombre: expect.any(String),
                    apellido: expect.any(String),
                    documento: expect.any(Number),
                    fec_nacimiento: expect.any(String)
                })
            ])
        )
    })
})


describe("GET /api/alumnos/:id", function () {
    it("Debería retornar cód 200 si objeto encontrado", async () => {
        const res = await request(app).get("/api/alumnos/3");
        expect(res.statusCode).toEqual(200);
        expect(res.headers["content-type"]).toEqual("application/json; charset=utf-8");
        expect(res.body).toEqual(
            expect.objectContaining({
                "id": 3,
                "nombre": expect.any(String)
            })
        );
    }
    )
    it("Deberría retornar cód 404 si objeto no encontrado", async () => {
        const res = await request(app).get("/api/alumnos/999");
        expect(res.statusCode).toEqual(404);
        expect(res.body).toEqual(
            expect.objectContaining(
                { mensaje: 'Alumno no encontrado' }
            )
        );
    }
    )
});

describe('POST /alumnos', ()=>{
    it("Debería retornar cód 201 si objeto creado", async () => {
        const res = await request(app).post("/api/alumnos")
        //.set('Accept', 'application/json')
        .send({id:99, nombre: 'Micaela', apellido: 'Arrigoni', documento: 44606024, fec_nacimiento: '06/01/2003'})
        expect(res.statusCode).toEqual(201);
        expect(res.body).toEqual(
            expect.objectContaining(
                { 
                    id: expect.any(Number),
                    nombre: expect.any(String),
                    apellido: expect.any(String),
                    documento: expect.any(Number),
                    fec_nacimiento: expect.any(String)
                }
            )
        );
    }
    )

    it("Debería retornar cód 500 por error interno", async () => {
        const res = await request(app).post("/api/alumnos")
        .set('Accept', 'application/json')
        .send({id:99, nombre: 'Micaela', apellido: 'Arrigoni', documento: 44606024, fec_nacimiento: '06/01/2003'})
        expect(res.statusCode).toEqual(500);
        expect(res.body).toEqual(
            expect.objectContaining(
                { 
                    mensaje: 'Error interno' 
                }
            )
        );
    }
    )
})

describe('PUT /alumnos/:id', ()=>{
    it("Debería retornar cód 204 si objeto 6 modificado", async () => {
        const res = await request(app).put("/api/alumnos/6")
        .set('Accept', 'application/json')
        .send({id:6, nombre: 'NuevoAlumno', apellido: 'NuevoApellido', documento: 44606024, fec_nacimiento: '06/01/2003'})
        expect(res.statusCode).toEqual(204);
    },15000
    )

    it("Deberría retornar cód 404 si objeto no encontrado", async () => {
        const res = await request(app).put("/api/alumnos/77");
        expect(res.statusCode).toEqual(404);
        expect(res.body).toEqual(
            expect.objectContaining(
                { mensaje: 'Alumno no encontrado' }
            )
        );
    }
    )
})

describe('DELETE /alumnos/:id', ()=>{
    it("Debería retornar cód 204 si objeto 5 borrado", async () => {
        const res = await request(app).delete("/api/alumnos/5")
        expect(res.statusCode).toEqual(204);
    }
    )
})

