"use client";

import { LoggedUserContext } from "@/context";
import { changeAvatar } from "@/lib/getData";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const ChangeAvatar = ({ currentAvatar }) => {

  const [avatarForm, setAvatarForm] = useState(false);
  const { loggedUserData, setLoggedUserData } = useContext(LoggedUserContext);

  const schema = z.object({
    avatar: z
      .any()
      .refine((file) => file && file.length > 0, {
        message: "Avatar is required",
      })
      .refine((file) => file[0]?.size <= 1 * 1024 * 1024, {
        message: "Avatar must be less than 2MB",
      })
      .refine((file) => ["image/jpeg", "image/jpg", "image/png", "image/gif"].includes(file[0]?.type), {
        message: "Only JPG, JPEG, PNG, GIF are allowed",
      }),
  });

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("avatar", data.avatar[0]);
      const response = await changeAvatar(formData);
      
      if (response.status == 'Success') {
        setAvatarForm(false);
        setLoggedUserData(response.data);
      }else if(response.errors){
          for (var index in response.errors) {
              setError(index, {
                  message:response.errors[index],
              });
          }
      }
    } catch (e) {
        console.error(e);
    }
  };

  return (
    <>
      <div className="avatar">
        <Image
          alt=""
          src={loggedUserData?.avatar}
          height={50}
          width={50}
        />
      </div>

      {!avatarForm && (
        <div className="icon-wrapper btn-xs" onClick={() => {setAvatarForm(true); reset();}}>
          <i className="icofont icofont-pencil-alt-5"></i>
        </div>
      )}

      {errors.userAvatar && (
        <div className="font-danger">{errors.userAvatar.message}</div>
      )}

      {avatarForm && (
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" >
          <div>
            <input
              type="file"
              className="form-control"
              // accept="image/*"
              {...register('avatar')}
            />
            {errors.avatar && <p style={{ color: "red" }}>{errors.avatar.message}</p>}
          </div>

          <div className="text-center">
            <button className="btn btn-light" onClick={() => setAvatarForm(false)}>Close</button>
            <button className="btn btn-primary " type="submit">
              {isSubmitting ? (
                <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                ) : "Save"}
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default ChangeAvatar;
