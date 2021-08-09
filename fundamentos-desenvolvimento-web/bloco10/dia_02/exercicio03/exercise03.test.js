const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
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

  describe('Test function findUserById using async/await', () => {
    describe('Testing the Id exists', () => {
      it('Return the name', async ()=> {
        expect.assertions(1);
        const result = await getUserName(5);
        expect(result).toEqual('Paul');
      });
    });

    describe('Testing the Id nonexistent', () => {
      it('Return an error', async () => {
        expect.assertions(1);
        try{
          await getUserName(8);
        } catch (error){
          expect(error).toEqual({error: 'User with 8 not found.'});
        }
      });
    })
  });