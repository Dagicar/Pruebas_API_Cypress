describe('Proyecto de Pruebas de API REST - ReqRes', () => {
  const baseUrl = 'https://reqres.in/api';

  it('GET - Obtener lista de usuarios y validar código 200', () => {
    cy.request('GET', `${baseUrl}/users?page=2`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('page', 2);
      expect(response.body.data).to.be.an('array').that.is.not.empty;

      const firstUser = response.body.data[0];
      expect(firstUser).to.have.property('id');
      expect(firstUser).to.have.property('email');
    });
  });

  it('POST - Crear un nuevo usuario (Código 201)', () => {
    const newUser = {
      name: 'Gian',
      job: 'QA Automation Engineer'
    };

    cy.request('POST', `${baseUrl}/users`, newUser).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.name).to.eq(newUser.name);
      expect(response.body.job).to.eq(newUser.job);
      expect(response.body).to.have.property('id');
    });
  });

  it('PUT - Actualizar información de usuario (Código 200)', () => {
    const updatedData = {
      name: 'Gian Yovera',
      job: 'junior QA Automation Engineer'
    };

    cy.request('PUT', `${baseUrl}/users/2`, updatedData).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq(updatedData.name);
      expect(response.body).to.have.property('updatedAt');
    });
  });

  it('DELETE - Eliminar un usuario (Código 204)', () => {
    cy.request('DELETE', `${baseUrl}/users/2`).then((response) => {
      expect(response.status).to.eq(204);
    });
  });

  it('POST - Login fallido sin contraseña / Manejo de Error (Código 400)', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/login`,
      body: { email: 'peter@klaven' },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('error', 'Missing password');
    });
  });
});