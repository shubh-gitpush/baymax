<h1 align="center">🤖 Baymax</h1>
<h3 align="center">Your Personal Health Companion</h3>

<p align="center">
  <img src="/logo.png" width="80%" alt="Baymax Banner"/>
</p>

---
# 🩺 Baymax: AI-Powered Healthcare Appointment & Skin Disease Screening Platform

Baymax is a full-stack digital healthcare platform designed to streamline medical appointments and provide automated AI-driven skin disease screening. By combining a robust Django REST API backend, a modern React frontend, and a PyTorch-based Deep Learning model (ResNet-18), Baymax delivers intelligent doctor recommendations, appointment management, and multimodal skin lesion assessment.

---

## 🌟 Features

### 🔐 Patient & Doctor Portals

- Role-based authentication system for Patients and Doctors
- Custom onboarding workflows for each user type
- Detailed user profiles:
  - **Patients:** Age, Gender, Medical History
  - **Doctors:** Specialization, Availability Hours, Professional Bio
- JWT Authentication using SimpleJWT
- Secure access and refresh token workflow
- Automatic token management via Axios interceptors

---

### 🩺 Smart Doctor Suggestions

- Enter symptoms in plain text
- Intelligent symptom-to-specialization mapping
- Example recommendations:
  - Rash → Dermatologist
  - Cough → General Physician
  - Chest Pain → Cardiologist

---

### 📅 Appointment Management

#### Multi-Step Appointment Booking

Patients can:

1. Select a Doctor
2. Choose Appointment Date
3. Select Available Time Slot
4. Describe Symptoms

#### Appointment Dashboard

Track appointment status:

- Pending
- Confirmed
- Cancelled

Manage and review upcoming consultations easily.

---

### 🤖 AI-Powered Skin Disease Screening

#### Image-Based Disease Detection

Upload skin lesion images for classification using a fine-tuned **ResNet-18** model trained on the **HAM10000 Dataset**.

Supported disease categories include:

- Actinic Keratoses
- Basal Cell Carcinoma
- Benign Keratosis-like Lesions
- Dermatofibroma
- Melanoma
- Melanocytic Nevi
- Vascular Lesions

#### Multimodal Prediction System

The prediction engine combines:

##### Image Features

- Uploaded skin lesion image

##### Clinical Metadata

- Itching
- Pain
- Burning sensation
- Duration
- Lesion location

This fusion improves prediction quality and diagnostic relevance.

#### Actionable Results

The system provides:

- Disease classification
- Confidence score
- Severity level
- Personalized care recommendations
- Triage warnings
- Doctor consultation recommendations for critical cases

---

## 🛠️ Technology Stack

### Backend

| Technology | Purpose |
|------------|----------|
| Django 5 | Backend Framework |
| Django REST Framework | REST APIs |
| SimpleJWT | Authentication |
| django-cors-headers | Cross-Origin Support |
| SQLite | Database |
| Pillow | Image Processing |
| PyTorch | Model Inference |

### Frontend

| Technology | Purpose |
|------------|----------|
| React 18 | SPA Development |
| React Router v6 | Routing |
| Tailwind CSS | Styling |
| Axios | API Communication |
| Radix UI | UI Components |
| Lucide React | Icons |

### Machine Learning

| Technology | Purpose |
|------------|----------|
| PyTorch 2.0 | Deep Learning |
| torchvision | Image Processing |
| scikit-learn | Data Splitting |
| Pandas | Data Handling |
| NumPy | Numerical Computation |
| TensorBoard | Training Visualization |

---

## 📂 Project Structure

```text
baymax/
├── appointments/
│   ├── models.py
│   ├── serializers.py
│   └── views.py
│
├── baby/
│   ├── models.py
│   ├── serializers.py
│   └── views.py
│
├── baymax/
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
│
├── diagnosis/
│   ├── views.py
│   └── ml_inference.py
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── Api.js
│       └── App.js
│
├── ml_training/
│   ├── outputs/
│   ├── config.py
│   ├── train.py
│   ├── train_multimodal.py
│   ├── inference.py
│   └── QUICKSTART.md
│
├── db.sqlite3
├── manage.py
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Python 3.10+
- Node.js 18+
- npm

---

## 1️⃣ Backend Setup

### Create Virtual Environment

#### Windows

```bash
python -m venv venv
venv\Scripts\activate
```

#### Linux / macOS

```bash
python3 -m venv venv
source venv/bin/activate
```

### Install Dependencies

```bash
pip install django djangorestframework djangorestframework-simplejwt django-cors-headers pillow torch torchvision pandas numpy scikit-learn tqdm matplotlib tensorboard
```

### Apply Migrations

```bash
python manage.py migrate
```

### Run Backend Server

```bash
python manage.py runserver
```

Backend URL:

```text
http://127.0.0.1:8000/
```

---

## 2️⃣ Frontend Setup

Navigate to frontend directory:

```bash
cd frontend
```

Install packages:

```bash
npm install
```

Start development server:

```bash
npm start
```

Frontend URL:

```text
http://localhost:3000/
```

---

## 3️⃣ Machine Learning Setup (Optional)

The diagnosis system requires trained model weights:

```text
resnet18_best.pth
or
resnet18_multimodal_best.pth
```

stored inside:

```text
ml_training/outputs/
```

### Dataset Structure

```text
archive/
├── HAM10000_metadata.csv
└── processed_images_dataset/
    └── processed_images/
```

### Train Image Classification Model

```bash
cd ml_training
python train.py
```

### Train Multimodal Model

```bash
python train_multimodal.py --csv path/to/metadata.csv --image-root path/to/images
```

### Run Inference

```bash
python inference.py --image "path/to/lesion_image.jpg"
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description | Authentication |
|----------|----------|-------------|----------------|
| POST | `/api/users/login/` | Obtain JWT Access & Refresh Tokens | No |
| POST | `/api/users/token/refresh/` | Refresh Access Token | No |
| GET | `/api/users/profile/` | Fetch User Profile | Yes |
| POST | `/api/users/register/` | General Registration | No |
| POST | `/api/users/register/patient/` | Patient Registration | No |
| POST | `/api/users/register/doctor/` | Doctor Registration | No |
| GET | `/api/users/doctors/` | Fetch All Doctors | No |
| GET | `/api/users/suggest-doctors/` | Symptom-Based Recommendations | No |
| GET | `/api/appointments/` | Retrieve Appointments | Yes |
| POST | `/api/appointments/` | Book Appointment | Yes |
| PUT/PATCH | `/api/appointments/{id}/` | Update Appointment | Yes |
| DELETE | `/api/appointments/{id}/` | Cancel Appointment | Yes |
| POST | `/api/diagnosis/skin-check/` | AI Skin Disease Screening | No |

---

## 🧠 Machine Learning Pipeline

### Dataset

- HAM10000 Skin Lesion Dataset
- Stratified Train / Validation / Test Split (70/15/15)

### Model

- ResNet-18 Transfer Learning
- Fine-tuned for 7 skin disease classes
- Class-weighted loss handling
- TensorBoard training monitoring

### Multimodal Fusion

Combines:

- CNN Image Embeddings
- Patient Clinical Metadata

to generate enhanced disease predictions.

---

## ⚕️ Medical Disclaimer

> Baymax is intended for educational, research, and demonstration purposes only.
>
> The AI predictions, recommendations, and triage advice generated by the system are **not a substitute for professional medical diagnosis, treatment, or clinical judgment**.
>
> Always consult a qualified dermatologist or healthcare professional regarding any medical condition or health concern.

---

## 👨‍💻 Author

Developed using:

- Django REST Framework
- React
- PyTorch
- Tailwind CSS
- JWT Authentication
- HAM10000 Dataset

---

## 📜 License

This project is intended for educational and research purposes.

Feel free to fork, modify, and extend the project for learning and experimentation.
