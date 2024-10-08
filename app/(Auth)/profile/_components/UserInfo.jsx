import { getUserAnalytics, loginUserData } from '@/lib/getData';
import ChangeAvatar from './ChangeAvatar';
import EditButton from './EditButton';

export const UserInfo = async () => {

    const userInfo = await loginUserData();
    const { appointments, procedures } = await getUserAnalytics();

    return (
    <div className="card card-round">
        <div className="card-body">
            <div className="row">
                <div className="col-xl-12 col-md-12 col-sm-12">

                    <div className="row">
                        <div className="col-xl-12 col-md-12 col-sm-12">
                            <div className="profile_edit_bttn pull-right">
                                <EditButton userInfo={userInfo} />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-4 col-md-4 col-sm-12">
                            <div className="user-profile mb-4">
                                <div className="hovercard text-center">
                                    <div className="user-image">
                                        <ChangeAvatar currentAvatar={userInfo?.avatar} />
                                    </div>
                                </div>    
                            </div>

                            <div className="row">
                                <div className="col-xl-4 col-md-4 col-sm-12 margin_none">
                                    <div className="avater-info-lft border_rt">
                                    <p>{appointments}</p>
                                    <p>Total</p>
                                    <p>Appointments</p>
                                    </div>  
                                </div>

                                <div className="col-xl-4 col-md-4 col-sm-12 margin_none">
                                    <div className="avater-info-lft border_rt">
                                    <p>{procedures}</p>
                                    <p>Total</p>
                                    <p>Invoice</p>
                                    </div>  
                                </div>

                                <div className="col-xl-4 col-md-4 col-sm-12 margin_none2">
                                    <div className="avater-info-lft">
                                    <p>{procedures}</p>
                                    <p>Total</p>
                                    <p>Procedures</p>
                                    </div>  
                                </div>
                            </div>                            
                        </div>                            

                        <div className="col-xl-4 col-md-4 col-sm-12 border_rt_lt">                            
                            <ul className="user_wrapper">
                                <li><span className="user_info_icon"></span><span>{userInfo?.name}</span></li>
                                <li><span className="sms_info_icon"></span><span>{userInfo?.email}</span></li>
                                <li><span className="phn_info_icon"></span><span>{userInfo?.phone}</span></li>
                                <li><span className="map_info_icon"></span><span>{userInfo?.address}</span></li>
                            </ul>
                        </div>

                        <div className="col-xl-4 col-md-4 col-sm-12">
                            <ul className="user_wrapper2">
                                <li><span><b>Gender:</b> {userInfo?.gender}</span></li>
                                <li><span><b>Date of Birth:</b> {userInfo?.dob}</span></li>
                                <li><span><b>Height:</b> {userInfo?.height}</span></li>
                                <li><span><b>Weight:</b> {userInfo?.weight}</span></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>                        
            </div>
        </div>
    </div>
    )
}
