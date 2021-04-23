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

  describe('Testing the function findUserById using Promise', () => {
    describe('Testing the id exists', () => {
      it('return the name',  () => {
        expect.assertions(1);
        const user =  getUserName(4);
        return getUserName(4).then(data => expect(data).toEqual('Mark'));
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