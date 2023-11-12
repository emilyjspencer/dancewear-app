import AuthenticationService from './AuthenticationService'; // This overwrites axios methods with jest Mock
import axios from 'axios';
jest.mock('axios');


describe('AuthenticationService', () => {

  it('should handle successful login and return JWT for user', async () => {

    axios.post.mockResolvedValue({
      data: {
        jwt: 'mockedJWT',
      },
    });

    const setItemMock = jest.spyOn(window.localStorage.__proto__, 'setItem');

  
    const data = {
      username: 'emilyjs',
      password: 'password',
    };

    const result = await AuthenticationService.login(data);

  
    expect(result).toEqual({
      jwt: 'mockedJWT',
    
    });

    expect(setItemMock).toHaveBeenCalledWith('user', JSON.stringify(result));
  });

  
  


});


