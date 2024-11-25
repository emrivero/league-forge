import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Skill } from "../../../pages/rules/skills/types";
import { db } from "../index";

export const useSkillByName = (skillName: string) => {
  const [skill, setSkill] = useState<Skill | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown | null>(null);

  useEffect(() => {
    const fetchSkill = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const skillsCollection = collection(db, "skills");
        const q = query(skillsCollection, where("name", "==", skillName));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          setSkill(querySnapshot.docs[0].data() as Skill);
        } else {
          setError("Skill not found");
        }
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSkill();
  }, [skillName]);

  return { skill, isLoading, error };
};
