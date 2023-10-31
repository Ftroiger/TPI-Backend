const request = require('supertest');
const app = require('../index');

describe('GET /api/maestros', () => {
    it('Debería retornar cod 200 con lista de maestros', async () => {
        const res = await request(app)
            .get('/api/maestros')
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


describe("GET /api/maestros/:id", function () {
    it("Debería retornar cód 200 si objeto encontrado", async () => {
        const res = await request(app).get("/api/maestros/3");
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
        const res = await request(app).get("/api/maestros/999");
        expect(res.statusCode).toEqual(404);
        expect(res.body).toEqual(
            expect.objectContaining(
                { mensaje: 'No existe el maestro' }
            )
        );
    }
    )
});

describe('POST /maestros', ()=>{
    it("Debería retornar cód 201 si objeto creado", async () => {
        const res = await request(app).post("/api/maestros")
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
        const res = await request(app).post("/api/maestros")
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

describe('PUT /maestros/:id', ()=>{
    it("Debería retornar cód 204 si objeto 4 modificado", async () => {
        const res = await request(app).put("/api/maestros/4")
        .set('Accept', 'application/json')
        .send({id:99, nombre: 'NuevoMaestros', apellido: 'NuevoApellido', documento: 44606024, fec_nacimiento: '06/01/2003'})
        expect(res.statusCode).toEqual(204);
    },15000
    )

    it("Deberría retornar cód 404 si objeto no encontrado", async () => {
        const res = await request(app).put("/api/maestros/77");
        expect(res.statusCode).toEqual(404);
        expect(res.body).toEqual(
            expect.objectContaining(
                { mensaje: 'Maestro no encontrado' }
            )
        );
    }
    )
})

describe('DELETE /maestros/:id', ()=>{
    it("Debería retornar cód 204 si objeto 5 borrado", async () => {
        const res = await request(app).delete("/api/maestros/5")
        expect(res.statusCode).toEqual(204);
    }
    )
})

