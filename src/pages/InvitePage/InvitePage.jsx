import { collection, getDocs, query, where } from "firebase/firestore";
import { HeartIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { db } from "../../../firebase";
import CeremonyDetails from "../../components/CeremonyDetails/CeremonyDetails";

import "./invitePage.scss";

const InvitePage = () => {
  const { inviteCode } = useParams();
  const [guest, setGuest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchGuestData() {
      if (!inviteCode) {
        setError("Invalid invitation code");
        setLoading(false);
        return;
      }

      try {
        const guestsRef = collection(db, "guests");
        const q = query(guestsRef, where("invitationCode", "==", inviteCode));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
          setError("Invitation not found");
        } else {
          const guestData = {
            id: querySnapshot.docs[0].id,
            ...querySnapshot.docs[0].data(),
          };
          setGuest(guestData);
        }
      } catch (error) {
        console.error("Error fetching invitation:", error);
        setError("Failed to load invitation");
      } finally {
        setLoading(false);
      }
    }

    fetchGuestData();
  }, [inviteCode]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <HeartIcon className="h-12 w-12 text-white mx-auto animate-pulse" />
          <p className="mt-4 text-gray-300">Loading your invitation...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="max-w-md w-full bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg p-8 text-center">
          <div className="text-white mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Oops!</h2>
          <p className="text-gray-300 mb-6">{error}</p>
          <a
            href="/"
            className="inline-block px-6 py-3 bg-white text-black font-medium rounded-md transition-colors hover:bg-gray-200"
          >
            Return Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="pad-it">
      <CeremonyDetails name={guest.name} access={guest.accessLevel} />
    </div>
  );
};

export default InvitePage;
