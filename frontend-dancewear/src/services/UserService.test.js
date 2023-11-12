import axios from 'axios';
import UserService from './UserService';


    jest.mock('axios');

    it('should test getDanceTeacherDashboard', async () => {


      axios.get.mockResolvedValue({ data: 'success' });

 
      const result = await UserService.getDanceTeacherDashboard();

      expect(result.data).toEqual('success');
    });

    it('should test getUserDashboard', async () => {


        axios.get.mockResolvedValue({ data: 'success' });
  
   
        const result = await UserService.getUserDashboard();
  
        expect(result.data).toEqual('success');
      });

      it('should test getAdminDashboard', async () => {


        axios.get.mockResolvedValue({ data: 'success' });
  
   
        const result = await UserService.getAdminDashboard();
  
        expect(result.data).toEqual('success');
      });

