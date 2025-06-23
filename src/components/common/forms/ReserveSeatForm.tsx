"use client";
import VerifyFields from "@/utils/verification/VerifyFields";
import clsx from "clsx";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

type ReserveSeatFormProps = {
  onSubmit?: (data: { email: string; parentName: string; phone: string; childName: string; childAge: string; grade: string }) => void;
  minAge?: number;
  maxAge?: number;
  maxAgeStrict?: boolean;
  minGrade?: number;
  maxGrade?: number;
  showOtherGrade?: boolean;
  className?: string;
  calloutText?: string;
};

export default function ReserveSeatForm({ onSubmit, minAge = 7, maxAge = 15, maxAgeStrict = false, minGrade = 3, maxGrade = 8, showOtherGrade = true, className, ...props }: ReserveSeatFormProps) {
  const [agreed, setAgreed] = useState(false);
  const [defaultCountry, setDefaultCountry] = useState("us");

  // Input states
  const [email, setEmail] = useState("");
  const [parentName, setParentName] = useState("");
  const [phone, setPhone] = useState("");
  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] = useState("");
  const [grade, setGrade] = useState("");

  // Error handling
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const localVerifyFields = () => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/; // Basic E.164 international phone number format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation regex

    const result = VerifyFields([
      { field: "email", value: email, required: true, regex: emailRegex },
      { field: "parentName", value: parentName, required: true, minLength: 1, maxLength: 70 },
      { field: "phone", value: phone, required: true, regex: phoneRegex },
      { field: "childName", value: childName, required: true, minLength: 1, maxLength: 70 },
      { field: "childAge", value: childAge, required: true, minValue: 1, maxValue: 120 },
      { field: "grade", value: grade, required: true, minValue: 1, maxValue: 12 },
    ]);

    return result;
  };

  const isFormComplete = agreed && email.trim() && parentName.trim() && phone.trim() && childName.trim() && childAge && grade;

  useEffect(() => {
    const locale = navigator.language || "en-US";
    const countryCode = locale.split("-")[1]?.toLowerCase() || "us";
    setDefaultCountry(countryCode);
  }, []);

  const handleInputChange = () => {
    const result = localVerifyFields();
    setErrors({}); // Reset errors
    for (const field in result.errors) {
      setErrors((prev) => ({ ...prev, [field]: result.errors[field][0] }));
    }
    // console.log(errors);
  };

  const handleSubmit = () => {
    if (!isFormComplete) return;

    const result = localVerifyFields();

    if (!result.valid) {
      // Get first field with error
      const firstFieldWithError = Object.keys(result.errors)[0];

      // Get the first error message for that field
      const firstErrorMessage = result.errors[firstFieldWithError][0];

      alert(`[${firstFieldWithError}]:  ${firstErrorMessage}`);
    }

    if (onSubmit) {
      onSubmit({
        email,
        parentName,
        phone,
        childName,
        childAge,
        grade,
      });
    }
  };

  return (
    <div className={clsx("mx-auto bg-white rounded-xl shadow-lg p-6 space-y-4", className)}>
      <h2 className="text-center text-xl font-bold text-purple-800">RESERVE YOUR SEAT</h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="email" className="font-semibold mb-1 text-gray-700">
            Parent's Email
          </label>
          <input
            id="email"
            type="email"
            placeholder=""
            className="border rounded px-3 py-2 w-full"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => {
              setTouched((prev) => ({ ...prev, email: true }));
              handleInputChange();
            }}
          />
          {Boolean(touched["email"] && errors["email"]) && <span className="text-sm text-red-500 mt-1">{errors["email"]}</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="parentName" className="font-semibold mb-1 text-gray-700">
            Parent's Name
          </label>
          <input
            id="parentName"
            type="text"
            placeholder=""
            className="border rounded px-3 py-2 w-full"
            required
            value={parentName}
            onChange={(e) => setParentName(e.target.value)}
            onBlur={() => {
              setTouched((prev) => ({ ...prev, parentName: true }));
              handleInputChange();
            }}
          />
          {Boolean(touched["parentName"] && errors["parentName"]) && <span className="text-sm text-red-500 mt-1">{errors["parentName"]}</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className="font-semibold mb-1 text-gray-700">
            Parent's Phone
          </label>
          <PhoneInput
            country={defaultCountry}
            enableSearch
            preferredCountries={["us", "gb", "in", "ca", "au", "de", "nl"]}
            value={phone}
            onChange={(value) => setPhone(value)}
            inputProps={{
              name: "phone",
              required: true,
              id: "phone",
              onBlur: () => {
                setTouched((prev) => ({ ...prev, phone: true }));
                handleInputChange();
              },
            }}
            containerClass="!w-full !relative !border !rounded !h-[42px]"
            inputClass="!w-full !py-2 !pl-12 !pr-3 !border !rounded !outline-none !h-full"
            buttonClass="!absolute !left-0 !top-0 !h-full !border-r !border-gray-300 !bg-white !z-10"
          />
          {Boolean(touched["phone"] && errors["phone"]) && <span className="text-sm text-red-500 mt-1">{errors["phone"]}</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="childName" className="font-semibold mb-1 text-gray-700">
            Child's Name
          </label>
          <input
            id="childName"
            type="text"
            placeholder=""
            className="border rounded px-3 py-2 w-full"
            required
            value={childName}
            onChange={(e) => setChildName(e.target.value)}
            onBlur={() => {
              setTouched((prev) => ({ ...prev, childName: true }));
              handleInputChange();
            }}
          />
          {Boolean(touched["childName"] && errors["childName"]) && <span className="text-sm text-red-500 mt-1">{errors["childName"]}</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="childAge" className="font-semibold mb-1 text-gray-700">
            Child's Age
          </label>
          <select
            id="childAge"
            className="border rounded px-3 py-2 w-full"
            required
            value={childAge}
            onChange={(e) => setChildAge(e.target.value)}
            onBlur={() => {
              setTouched((prev) => ({ ...prev, childAge: true }));
              handleInputChange();
            }}
          >
            <option value="" disabled></option>
            {Array.from({ length: maxAge - minAge + 1 }, (_, i) => i + minAge).map((age) => {
              if (!maxAgeStrict && age >= maxAge) {
                return (
                  <option key={age} value={`${age}+`}>
                    {age}+
                  </option>
                );
              } else {
                return (
                  <option key={age} value={`${age}`}>
                    {age}
                  </option>
                );
              }
            })}
          </select>
          {Boolean(touched["childAge"] && errors["childAge"]) && <span className="text-sm text-red-500 mt-1">{errors["childAge"]}</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="childGrade" className="font-semibold mb-1 text-gray-700">
            Child's Grade
          </label>
          <select
            id="childGrade"
            className="border rounded px-3 py-2 w-full"
            required
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            onBlur={() => {
              setTouched((prev) => ({ ...prev, grade: true }));
              handleInputChange();
            }}
          >
            <option value="" disabled></option>
            {Array.from({ length: maxGrade - minGrade + 1 }, (_, i) => i + minGrade).map((g) => (
              <option key={g} value={`${g}`}>
                {g}
              </option>
            ))}
            {showOtherGrade && <option value="other">Other</option>}
          </select>
          {Boolean(touched["grade"] && errors["grade"]) && <span className="text-sm text-red-500 mt-1">{errors["grade"]}</span>}
        </div>
      </div>

      <div className="flex items-start gap-2">
        <input type="checkbox" className="mt-1" checked={agreed} onChange={() => setAgreed(!agreed)} />
        <label className="text-sm text-gray-600">
          I agree to the{" "}
          <a href="#" className="text-blue-600 underline">
            terms and conditions
          </a>
        </label>
      </div>

      <button
        onClick={handleSubmit}
        className={clsx("w-full py-2 rounded bg-brand-purple text-white font-semibold transition", {
          "opacity-50 cursor-not-allowed": !isFormComplete || Object.keys(errors).length > 0,
          "hover:bg-purple-900 cursor-pointer": isFormComplete && Object.keys(errors).length === 0,
        })}
        disabled={!isFormComplete || Object.keys(errors).length > 0}
      >
        SUBMIT
      </button>

      {props.calloutText && props.calloutText.length > 0 && <p className="text-center text-yellow-500 font-semibold text-lg">ONLY A FEW SEATS LEFT!</p>}
    </div>
  );
}
