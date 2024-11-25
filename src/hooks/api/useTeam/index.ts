import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Team } from "../../../pages/teams/types";
import { db } from "../index"; // Asegúrate de que la ruta sea correcta

export const useTeam = (teamId: string) => {
  const [team, setTeam] = useState<Team | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown | null>(null);

  useEffect(() => {
    const fetchTeam = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const teamDoc = doc(db, "teams", teamId);
        const teamSnapshot = await getDoc(teamDoc);

        if (teamSnapshot.exists()) {
          setTeam(teamSnapshot.data() as Team);
        } else {
          setError("Team not found");
        }
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeam();
  }, [teamId]);

  return { team, isLoading, error };
};
