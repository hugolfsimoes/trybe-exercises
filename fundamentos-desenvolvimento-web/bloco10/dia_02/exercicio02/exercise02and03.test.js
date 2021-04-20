const users = {
 4 : { name: 'Mark' },
 5 : { name: 'Paul' }
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        };
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  };
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  };

  describe('Testing the function findUserById', () => {
    describe('Testing the id exists', () => {
      it('return the name', async () => {
        expect.assertions(1);
        const user = await getUserName(4);
        return expect(user).toEqual('Mark');
      });
    });
    
    describe('Testing the id nonexistent', () => {
      it('Return an error', () => {
        expect.assertions(1);
        return getUserName(8).catch(error => {
          expect(error).toEqual({ error: 'User with 8 not found.'});
        });
      });
    });
  });