import React from "react";
import { useForm } from "react-hook-form";

const ElectricalFacilityForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle form submission, e.g., send data to an API
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="facilityName">Facility Name</label>
        <input
          id="facilityName"
          {...register("facilityName", {
            required: "Facility Name is required",
          })}
        />
        {errors.facilityName && typeof errors.facilityName.message === 'string' && (
  <p>{errors.facilityName.message}</p>
)}

      </div>

      <div>
        <label htmlFor="location">Location</label>
        <input
          id="location"
          {...register("location", { required: "Location is required" })}
        />
        {errors.location && errors.location.message === 'string' && ( <p>{errors.location.message}</p>)}
      </div>

      <div>
        <label htmlFor="capacity">Capacity (MW)</label>
        <input
          id="capacity"
          type="number"
          {...register("capacity", {
            required: "Capacity is required",
            valueAsNumber: true,
          })}
        />
        {errors.capacity && errors.capacity.message === 'string' && ( <p>{errors.capacity.message}</p>)}
      </div>

      <div>
        <label htmlFor="status">Status</label>
        <select
          id="status"
          {...register("status", { required: "Status is required" })}
        >
          <option value="">Select Status</option>
          <option value="operational">Operational</option>
          <option value="maintenance">Maintenance</option>
          <option value="decommissioned">Decommissioned</option>
        </select>
        {errors.status && errors.status.message === 'string' && ( <p>{errors.status.message}</p>)}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ElectricalFacilityForm;
