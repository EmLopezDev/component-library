import ProfileCard from "../../components/profile-card/ProfileCard";
import { profileCardData } from "../../components/profile-card/profile-data";
import "./ProfileCardPage.css";

const firsProfile = profileCardData[0];

const ProfileCardPage = () => {
    return (
        <section className="profile__page">
            <h2>Single Card</h2>
            <div className="profile__single">
                <ProfileCard
                    id={firsProfile.id}
                    name={firsProfile.name}
                    role={firsProfile.role}
                    company={firsProfile.company}
                    avatar={firsProfile.avatar}
                    description={firsProfile.description}
                />
            </div>
            <h2>Grid Layout Card</h2>
            <div className="profile__grid__container">
                {profileCardData.map((entry) => {
                    return (
                        <ProfileCard
                            key={entry.id}
                            id={entry.id}
                            name={entry.name}
                            role={entry.role}
                            company={entry.company}
                            avatar={entry.avatar}
                            description={entry.description}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default ProfileCardPage;
