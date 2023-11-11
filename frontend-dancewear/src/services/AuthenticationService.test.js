import AuthenticationService from './AuthenticationService';
import axios from 'axios';
import { logout } from './AuthenticationService'; // replace 'app' with the actual path to your file

jest.mock('axios');

describe('AuthenticationService', () => {

  it('should handle successful login', async () => {

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


