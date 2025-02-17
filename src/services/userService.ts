import { Intern, Education, Training, WorkExperience } from '@/types/user';
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
  },

  // ดึงข้อมูลการศึกษา
  async getEducation(): Promise<Education | null> {
    try {
      const token = Cookies.get('accessToken');
      const user = Cookies.get('user');
      const userData = user ? JSON.parse(user) : null;
      const userId = userData?.id;

      const response = await fetch(`${API_URL}/educations/`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch education');
      }

      const educations = await response.json();
      // กรองข้อมูลการศึกษาตาม user_id
      const userEducation = educations.find((edu: Education) => edu.user_id === userId);
      return userEducation || null;
    } catch (error) {
      console.error('Error fetching education:', error);
      return null;
    }
  },

  // อัพเดทข้อมูลการศึกษา
  async updateEducation(educationData: Education): Promise<Education> {
    try {
      const token = Cookies.get('accessToken');
      const response = await fetch(`${API_URL}/educations/${educationData.id}/`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(educationData),
      });

      if (!response.ok) {
        throw new Error('Failed to update education');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error updating education:', error);
      throw error;
    }
  },

  // สร้างข้อมูลการศึกษาใหม่
  async createEducation(educationData: Education): Promise<Education> {
    try {
      const token = Cookies.get('accessToken');
      const response = await fetch(`${API_URL}/educations/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(educationData),
      });

      if (!response.ok) {
        throw new Error('Failed to create education');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating education:', error);
      throw error;
    }
  },

  // ดึงข้อมูลประวัติการอบรม
  async getTrainings(): Promise<Training[]> {
    try {
      const token = Cookies.get('accessToken');
      const user = Cookies.get('user');
      const userData = user ? JSON.parse(user) : null;
      const userId = userData?.id;

      const response = await fetch(`${API_URL}/trainings/`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch trainings');
      }

      const trainings = await response.json();
      // กรองข้อมูลการอบรมตาม user_id
      const userTrainings = trainings.filter((training: Training) => training.user_id === userId);
      return userTrainings || [];
    } catch (error) {
      console.error('Error fetching trainings:', error);
      return [];
    }
  },

  // อัพเดทข้อมูลการอบรม
  async updateTraining(trainingData: Training): Promise<Training> {
    try {
      const token = Cookies.get('accessToken');
      const response = await fetch(`${API_URL}/trainings/${trainingData.id}/`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(trainingData),
      });

      if (!response.ok) {
        throw new Error('Failed to update training');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error updating training:', error);
      throw error;
    }
  },

  // สร้างข้อมูลการอบรมใหม่
  async createTraining(trainingData: Training): Promise<Training> {
    try {
      const token = Cookies.get('accessToken');
      const response = await fetch(`${API_URL}/trainings/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(trainingData),
      });

      if (!response.ok) {
        throw new Error('Failed to create training');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating training:', error);
      throw error;
    }
  },

  // ดึงข้อมูลประวัติการทำงาน
  async getWorkExperiences(): Promise<WorkExperience[]> {
    try {
      const token = Cookies.get('accessToken');
      const user = Cookies.get('user');
      const userData = user ? JSON.parse(user) : null;
      const userId = userData?.id;

      const response = await fetch(`${API_URL}/work-experiences/`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch work experiences');
      }

      const workExperiences = await response.json();
      // กรองข้อมูลการทำงานตาม user_id
      const userWorkExperiences = workExperiences.filter((exp: WorkExperience) => exp.user_id === userId);
      return userWorkExperiences || [];
    } catch (error) {
      console.error('Error fetching work experiences:', error);
      return [];
    }
  },

  // อัพเดทข้อมูลประวัติการทำงาน
  async updateWorkExperience(workData: WorkExperience): Promise<WorkExperience> {
    try {
      const token = Cookies.get('accessToken');
      const response = await fetch(`${API_URL}/work-experiences/${workData.id}/`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(workData),
      });

      if (!response.ok) {
        throw new Error('Failed to update work experience');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error updating work experience:', error);
      throw error;
    }
  },

  // สร้างข้อมูลประวัติการทำงานใหม่
  async createWorkExperience(workData: WorkExperience): Promise<WorkExperience> {
    try {
      const token = Cookies.get('accessToken');
      const response = await fetch(`${API_URL}/work-experiences/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(workData),
      });

      if (!response.ok) {
        throw new Error('Failed to create work experience');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating work experience:', error);
      throw error;
    }
  },

};
