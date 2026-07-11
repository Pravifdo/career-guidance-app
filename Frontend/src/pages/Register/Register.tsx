import React, { useState, useRef, ChangeEvent, FormEvent } from "react";

interface FormData {
  fullName: string;
  email: string;
  contactNumber: string;
  university: string;
  academicYear: string;
  location: string;
  password: string;
  confirmPassword: string;
}

interface PasswordRequirements {
  minLength: boolean;
  hasUppercase: boolean;
  hasLowercase: boolean;
  hasNumber: boolean;
  hasSpecialChar: boolean;
}

export default function Register() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    contactNumber: "",
    university: "",
    academicYear: "",
    location: "",
    password: "",
    confirmPassword: "",
  });

  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [profilePreview, setProfilePreview] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [passwordStrength, setPasswordStrength] = useState<"Weak" | "Medium" | "Strong">("Weak");
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Password requirements
  const [requirements, setRequirements] = useState<PasswordRequirements>({
    minLength: false,
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasSpecialChar: false,
  });

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Check password requirements when password changes
    if (name === "password") {
      checkPasswordRequirements(value);
      checkPasswordStrength(value);
    }

    // Validate confirm password
    if (name === "confirmPassword" || name === "password") {
      const password = name === "password" ? value : formData.password;
      const confirmPassword = name === "confirmPassword" ? value : formData.confirmPassword;
      // Trigger validation
    }
  };

  // Handle blur events for validation
  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  // Handle profile image upload
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Remove profile image
  const removeImage = () => {
    setProfileImage(null);
    setProfilePreview("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Check password requirements
  const checkPasswordRequirements = (password: string) => {
    setRequirements({
      minLength: password.length >= 8,
      hasUppercase: /[A-Z]/.test(password),
      hasLowercase: /[a-z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    });
  };

  // Check password strength
  const checkPasswordStrength = (password: string) => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++;

    if (score <= 2) setPasswordStrength("Weak");
    else if (score <= 4) setPasswordStrength("Medium");
    else setPasswordStrength("Strong");
  };

  // Get password strength color
  const getStrengthColor = () => {
    switch (passwordStrength) {
      case "Weak":
        return "bg-red-500";
      case "Medium":
        return "bg-yellow-500";
      case "Strong":
        return "bg-green-500";
      default:
        return "bg-gray-300";
    }
  };

  // Validate confirm password
  const isPasswordMatch = () => {
    return formData.password === formData.confirmPassword && formData.confirmPassword.length > 0;
  };

  // Check if all requirements are met
  const allRequirementsMet = () => {
    return Object.values(requirements).every((req) => req === true);
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate all fields
    const requiredFields = ["fullName", "email", "contactNumber", "university", "academicYear", "location", "password", "confirmPassword"];
    const allTouched: Record<string, boolean> = {};
    requiredFields.forEach((field) => {
      allTouched[field] = true;
    });
    setTouched(allTouched);

    // Check if form is valid
    const isValid = 
      formData.fullName.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.contactNumber.trim() !== "" &&
      formData.university.trim() !== "" &&
      formData.academicYear !== "" &&
      formData.location.trim() !== "" &&
      allRequirementsMet() &&
      isPasswordMatch();

    if (isValid) {
      // Submit form data
      console.log("Form submitted:", { ...formData, profileImage });
      // Add your API call here
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-2xl">
        <div className="rounded-2xl border border-slate-200/60 bg-white/95 backdrop-blur-sm p-8 shadow-2xl shadow-blue-100/50 transition-all duration-300 hover:shadow-blue-200/50">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
              Create an Account
            </h2>
            <p className="text-slate-500 mt-2 text-sm">
              Join CareerHub and start building your career journey
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Profile Image Upload */}
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-4 border-blue-100 overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {profilePreview ? (
                    <img
                      src={profilePreview}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center">
                      <svg className="w-12 h-12 mx-auto text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-xs text-slate-500">Upload Photo</span>
                    </div>
                  )}
                </div>
                {profilePreview && (
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1.5 hover:bg-red-600 transition-colors shadow-md"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
              <label className="cursor-pointer">
                <span className="inline-flex items-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  Choose Image
                </span>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleImageUpload}
                />
              </label>
            </div>

            {/* Full Name */}
            <div>
              <label className="block mb-1.5 text-sm font-medium text-slate-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                placeholder="John Doe"
                className={`w-full rounded-lg border ${
                  touched.fullName && !formData.fullName.trim()
                    ? "border-red-500 focus:border-red-500"
                    : "border-slate-300 focus:border-blue-600"
                } px-4 py-3 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200`}
              />
              {touched.fullName && !formData.fullName.trim() && (
                <p className="mt-1 text-sm text-red-500">Full name is required</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1.5 text-sm font-medium text-slate-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                placeholder="example@gmail.com"
                className={`w-full rounded-lg border ${
                  touched.email && !formData.email.trim()
                    ? "border-red-500 focus:border-red-500"
                    : "border-slate-300 focus:border-blue-600"
                } px-4 py-3 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200`}
              />
              {touched.email && !formData.email.trim() && (
                <p className="mt-1 text-sm text-red-500">Email address is required</p>
              )}
            </div>

            {/* Contact Number */}
            <div>
              <label className="block mb-1.5 text-sm font-medium text-slate-700">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                placeholder="+94 77 123 4567"
                className={`w-full rounded-lg border ${
                  touched.contactNumber && !formData.contactNumber.trim()
                    ? "border-red-500 focus:border-red-500"
                    : "border-slate-300 focus:border-blue-600"
                } px-4 py-3 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200`}
              />
              {touched.contactNumber && !formData.contactNumber.trim() && (
                <p className="mt-1 text-sm text-red-500">Contact number is required</p>
              )}
            </div>

            {/* University Name */}
            <div>
              <label className="block mb-1.5 text-sm font-medium text-slate-700">
                University Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="university"
                value={formData.university}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                placeholder="University of Colombo"
                className={`w-full rounded-lg border ${
                  touched.university && !formData.university.trim()
                    ? "border-red-500 focus:border-red-500"
                    : "border-slate-300 focus:border-blue-600"
                } px-4 py-3 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200`}
              />
              {touched.university && !formData.university.trim() && (
                <p className="mt-1 text-sm text-red-500">University name is required</p>
              )}
            </div>

            {/* Academic Year */}
            <div>
              <label className="block mb-1.5 text-sm font-medium text-slate-700">
                Academic Year <span className="text-red-500">*</span>
              </label>
              <select
                name="academicYear"
                value={formData.academicYear}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className={`w-full rounded-lg border ${
                  touched.academicYear && !formData.academicYear
                    ? "border-red-500 focus:border-red-500"
                    : "border-slate-300 focus:border-blue-600"
                } px-4 py-3 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200`}
              >
                <option value="">Select Year</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
                <option value="Graduate">Graduate</option>
              </select>
              {touched.academicYear && !formData.academicYear && (
                <p className="mt-1 text-sm text-red-500">Please select your academic year</p>
              )}
            </div>

            {/* Location */}
            <div>
              <label className="block mb-1.5 text-sm font-medium text-slate-700">
                Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                placeholder="Colombo, Sri Lanka"
                className={`w-full rounded-lg border ${
                  touched.location && !formData.location.trim()
                    ? "border-red-500 focus:border-red-500"
                    : "border-slate-300 focus:border-blue-600"
                } px-4 py-3 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200`}
              />
              {touched.location && !formData.location.trim() && (
                <p className="mt-1 text-sm text-red-500">Location is required</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1.5 text-sm font-medium text-slate-700">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  placeholder="Create a strong password"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 pr-20 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 transition-colors"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Password Strength Meter */}
              {formData.password.length > 0 && (
                <div className="mt-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-600">Password Strength</span>
                    <span className={`text-sm font-semibold ${
                      passwordStrength === "Weak" ? "text-red-500" :
                      passwordStrength === "Medium" ? "text-yellow-500" :
                      "text-green-500"
                    }`}>
                      {passwordStrength}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${getStrengthColor()}`}
                      style={{
                        width: passwordStrength === "Weak" ? "33%" :
                               passwordStrength === "Medium" ? "66%" : "100%"
                      }}
                    />
                  </div>
                </div>
              )}

              {/* Password Requirements Checklist */}
              {formData.password.length > 0 && (
                <div className="mt-3 space-y-1.5">
                  <p className="text-xs font-medium text-slate-600">Password Requirements:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                    <div className={`flex items-center text-xs ${requirements.minLength ? "text-green-600" : "text-slate-400"}`}>
                      <span className="mr-1.5">{requirements.minLength ? "✓" : "○"}</span>
                      Minimum 8 characters
                    </div>
                    <div className={`flex items-center text-xs ${requirements.hasUppercase ? "text-green-600" : "text-slate-400"}`}>
                      <span className="mr-1.5">{requirements.hasUppercase ? "✓" : "○"}</span>
                      One uppercase letter
                    </div>
                    <div className={`flex items-center text-xs ${requirements.hasLowercase ? "text-green-600" : "text-slate-400"}`}>
                      <span className="mr-1.5">{requirements.hasLowercase ? "✓" : "○"}</span>
                      One lowercase letter
                    </div>
                    <div className={`flex items-center text-xs ${requirements.hasNumber ? "text-green-600" : "text-slate-400"}`}>
                      <span className="mr-1.5">{requirements.hasNumber ? "✓" : "○"}</span>
                      One number
                    </div>
                    <div className={`flex items-center text-xs ${requirements.hasSpecialChar ? "text-green-600" : "text-slate-400"}`}>
                      <span className="mr-1.5">{requirements.hasSpecialChar ? "✓" : "○"}</span>
                      One special character
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block mb-1.5 text-sm font-medium text-slate-700">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  placeholder="Confirm your password"
                  className={`w-full rounded-lg border ${
                    touched.confirmPassword && formData.confirmPassword.length > 0 && !isPasswordMatch()
                      ? "border-red-500 focus:border-red-500"
                      : touched.confirmPassword && isPasswordMatch()
                      ? "border-green-500 focus:border-green-500"
                      : "border-slate-300 focus:border-blue-600"
                  } px-4 py-3 pr-20 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 transition-colors"
                >
                  {showConfirmPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  )}
                </button>
              </div>
              {touched.confirmPassword && formData.confirmPassword.length > 0 && (
                <div className="mt-1.5">
                  {isPasswordMatch() ? (
                    <p className="text-sm text-green-600 flex items-center">
                      <span className="mr-1">✓</span> Passwords match
                    </p>
                  ) : (
                    <p className="text-sm text-red-500 flex items-center">
                      <span className="mr-1">✗</span> Passwords do not match
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-700 to-purple-700 hover:from-blue-800 hover:to-purple-800 text-white font-semibold py-3.5 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-300/50"
            >
              Create Account
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-slate-600">
              Already have an account?{" "}
              <a
                href="/login"
                className="font-semibold text-blue-700 hover:text-blue-800 hover:underline transition-colors"
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}