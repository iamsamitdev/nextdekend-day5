import { Intern } from '@/types/user';
import Cookies from 'js-cookie';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const userService = {
  // ดึงข้อมูลโปรไฟล์
  async getProfile(): Promise<Intern | null> {
    try {
      const token = Cookies.get('accessToken');
      const user = Cookies.get('user');
      const userData = user ? JSON.parse(user) : null;
      const userId = userData?.id;

      const response = await fetch(`${API_URL}/interns/`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch interns');
      }

      const interns = await response.json();
      // กรองข้อมูล intern ตาม user_id
      const userIntern = interns.find((intern: Intern) => intern.user_id === userId);
      return userIntern || null;
    } catch (error) {
      console.error('Error fetching profile:', error);
      return null;
    }
  },

  // อัพเดทข้อมูลโปรไฟล์
  async updateProfile(profileData: Intern): Promise<Intern> {
    try {
      const token = Cookies.get('accessToken');
      const response = await fetch(`${API_URL}/interns/${profileData.id}/`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
  },

  // สร้างข้อมูลโปรไฟล์ใหม่
  async createProfile(profileData: Intern): Promise<Intern> {
    try {
      const token = Cookies.get('accessToken');
      const response = await fetch(`${API_URL}/interns/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData),
      });

      if (!response.ok) {
        throw new Error('Failed to create profile');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating profile:', error);
      throw error;
    }
  }
};
