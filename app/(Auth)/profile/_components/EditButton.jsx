'use client'

import { updateProfileInfo } from '@/lib/getData';
import { zodResolver } from '@hookform/resolvers/zod';
import moment from 'moment';
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const EditButton = ({userInfo}) => {
    const router = useRouter();
    const [editModal, setEditModal] = useState(false);

    const schema = z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().min(1, "Email is required").email("Must be a valid email"),
        phone: z.string().min(10, "Phone number must be 10 digits"),
        dob: z.string().date("Must be a valid date"),
        height: z.string().min(1, "Height is required"),
        weight: z.string().min(1, "Weight is required"),
        gender: z.string().min(1, "Gender is required"),
        address: z.string().min(1, "Address is required"),
    });

    const {
    register,
    handleSubmit,
    setError,    
    formState: { errors, isSubmitting },
    } = useForm ({
        defaultValues: {
            ...userInfo,
            dob: moment(userInfo.dob).format("YYYY-MM-DD")
        },
        resolver: zodResolver(schema)    
    });

    async function onSubmit(data) {
        try {
            const response = await updateProfileInfo(data);
            
            if (response.status == 'Success') {
                router.refresh();
                setEditModal(false);
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
    }


    return (
        <>
        <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          display: block;
        }
      `}</style>

        <button className="btn btn-sm" onClick={() => setEditModal(true)}>
            <span className="icon-edit-blue">
                <span className="path1"></span>
                <span className="path2"></span>
                <span className="path3"></span>
            </span>
            <span>Edits</span>
        </button>

        { editModal &&

        <div className="modal modal-overlay">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content card">
                    <form className="row" onSubmit={handleSubmit(onSubmit)}>
                        <div className="modal-header">
                            <h5 className="modal-title m-l-20">Edit Profile</h5>
                        </div>
                        <div className="modal-body">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-6 col-md-4">
                                        <div className="mb-3">
                                            <label className="form-label">Name<span className="txt-danger">*</span></label>
                                            <input className="form-control" type="text" {...register('name')} />
                                            {errors.name && <div className="font-danger">{errors.name.message}</div>}
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4">
                                        <div className="mb-3">
                                            <label className="form-label">Email<span className="txt-danger">*</span></label>
                                            <input className="form-control" type="text" {...register('email')} disabled />
                                            {errors.email && <div className="font-danger">{errors.email.message}</div>}
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4">
                                        <div className="mb-3">
                                            <label className="form-label">Phone<span className="txt-danger">*</span></label>
                                            <input className="form-control" type="text" {...register('phone')} />
                                            {errors.phone && <div className="font-danger">{errors.phone.message}</div>}
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                        <div className="mb-3">
                                            <label className="form-label">Date of Birth<span className="txt-danger">*</span></label>
                                            <input className="form-control" type="date" {...register('dob')} />
                                            {errors.dob && <div className="font-danger">{errors.dob.message}</div>}
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                        <div className="mb-3">
                                            <label className="form-label">Height<span className="txt-danger">*</span></label>
                                            <input className="form-control" type="text" {...register('height')} />
                                            {errors.height && <div className="font-danger">{errors.height.message}</div>}
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                        <div className="mb-3">
                                            <label className="form-label">Weight<span className="txt-danger">*</span></label>
                                            <input className="form-control" type="text" {...register('weight')} />
                                            {errors.weight && <div className="font-danger">{errors.weight.message}</div>}
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                        <div className="mb-3">
                                            <label className="form-label">Gender</label>
                                            <select className="form-control" {...register('gender')}>
                                                <option value="">Select</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                            </select>
                                            {errors.gender && <div className="font-danger">{errors.gender.message}</div>}
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <label className="form-label">Address<span className="txt-danger">*</span></label>
                                        <textarea className="form-control" rows="4" {...register('address')}></textarea>
                                        {errors.address && <div className="font-danger">{errors.address.message}</div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="m-r-20">
                            <button className="btn btn-sm" type="button" onClick={() => setEditModal(false)}>Close</button>
                            <button className="btn btn-primary btn-sm" type="submit" disabled={isSubmitting}>{isSubmitting ? "Loading..." : "Save"}</button>
                        </div></div>
                    </form>
                </div>
            </div>
        </div>
        }
        </>
    )
}

export default EditButton