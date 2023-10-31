const request = require('supertest');
const app = require('../index');

describe('GET /api/materias', () => {
    it('Debería retornar cod 200 con lista de materias', async () => {
        const res = await request(app)
            .get('/api/materias')
            .set('Accept', 'application/json');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    nombre: expect.any(String),
                    anio_curricular: expect.any(Number),
                    fec_implementacion: expect.any(String)
                })
            ])
        )
    })
})


describe("GET /api/materias/:id", function () {
    it("Debería retornar cód 200 si objeto encontrado", async () => {
        const res = await request(app).get("/api/materias/3");
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
        const res = await request(app).get("/api/materias/999");
        expect(res.statusCode).toEqual(404);
        expect(res.body).toEqual(
            expect.objectContaining(
                { mensaje: 'No existe la materia' }
            )
        );
    }
    )
});

describe('POST /materias', ()=>{
    it("Debería retornar cód 201 si objeto creado", async () => {
        const res = await request(app).post("/api/materias")
        //.set('Accept', 'application/json')
        .send({id:99, nombre: 'Integración', anio_curricular: 6, fec_implementacion: '10/04/2023'})
        expect(res.statusCode).toEqual(201);
        expect(res.body).toEqual(
            expect.objectContaining(
                { 
                    id: expect.any(Number),
                    nombre: expect.any(String),
                    anio_curricular: expect.any(Number),
                    fec_implementacion: expect.any(String),
                }
            )
        );
    }
    )

    it("Debería retornar cód 500 por error interno", async () => {
        const res = await request(app).post("/api/materias")
        .set('Accept', 'application/json')
        .send({nombre: 'Integración', anio_curricular: 6, fec_implementacion: '10/04/2023'})
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

describe('PUT /materias/:id', ()=>{
    it("Debería retornar cód 204 si objeto 4 modificado", async () => {
        const res = await request(app).put("/api/materias/4")
        .set('Accept', 'application/json')
        .send({id:4, nombre: 'NuevaMateria', anio_curricular: 6, fec_implementacion: '10/04/2023'})
        expect(res.statusCode).toEqual(204);
    },15000
    )

    it("Deberría retornar cód 404 si objeto no encontrado", async () => {
        const res = await request(app).put("/api/materias/77");
        expect(res.statusCode).toEqual(404);
        expect(res.body).toEqual(
            expect.objectContaining(
                { mensaje: 'Materia no encontrada' }
            )
        );
    }
    )
})

describe('DELETE /materias/:id', ()=>{
    it("Debería retornar cód 204 si objeto 5 borrado", async () => {
        const res = await request(app).delete("/api/materias/5")
        expect(res.statusCode).toEqual(204);
    }
    )
})

