import AuthenticationService from './AuthenticationService'; // This overwrites axios methods with jest Mock
import axios from 'axios';
import logout from './AuthenticationService'

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

  


  it('should remove "user" from localStorage when logout is called', () => {
    // Mock my dependency = local storage
    const removeItemMock = jest.spyOn(window.localStorage.__proto__, 'removeItem');

    AuthenticationService.logout();

    expect(removeItemMock).toHaveBeenCalled();

  });



    it('should handle successful registration', async () => {
  
      axios.post.mockResolvedValue({ data: 'success' });


      const data = { username: 'emjspen', password: 'password' };
      const roleAuthority = 'USER';

      const result = await AuthenticationService.register(data, roleAuthority);

      expect(axios.post).toHaveBeenCalledWith(
        `http://localhost:8080/auth/register/${roleAuthority}`,
        data
      );


      expect(result.data).toEqual('success');
    });
  });




