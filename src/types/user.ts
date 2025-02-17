// Interface สำหรับข้อมูลนักศึกษาฝึกงาน
export interface Intern {
    id?: number;
    user_id: number;
    first_name: string;
    last_name: string;
    gender: string;
    birth_date?: string;
    birth_day?: string;
    birth_month?: string;
    birth_year?: string;
    nationality?: string;
    religion?: string;
    weight?: string;
    height?: string;
    english_level?: string;
    skills?: string;
    phone_number: string;
    email: string;
    address?: string;
    province?: string;
    district?: string;
    subdistrict?: string;
    zipcode?: string;
    profile_picture?: string;
    position_type?: string;
    position_interest?: string;
    preferred_provinces?: string;
}

// Interface สำหรับข้อมูลการศึกษา
export interface Education {
    id?: number;
    user_id: number;
    level: string;
    institution_name: string;
    faculty?: string;
    field_of_study?: string;
    gpa?: string;
    status: string;
}

// Interface สำหรับข้อมูลการฝึกอบรม
export interface Training {
    id?: number;
    user_id: number;
    topic: string;
    details?: string;
    trainer?: string;
    training_date?: string;
}

// Interface สำหรับข้อมูลประสบการณ์การทำงาน
export interface WorkExperience {
    id?: number;
    user_id: number;
    position: string;
    company_name: string;
    job_description?: string;
    start_date?: string;
    end_date?: string;
    is_current?: boolean;
}
