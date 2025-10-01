// File: src/logic/handleDelete.ts
import { Alert, Platform } from "react-native";

export const handleDeleteLogic = async (
  db: any,
  idToDelete: number,
  reloadData: () => void
) => {
  const executeDeleteAndRenumber = async () => {
    const deleteAndRenumberSQL = `
            -- 1. حذف العنصر المحدد
            DELETE FROM gym WHERE id = ${idToDelete};
            
            -- 2. إعادة ترقيم (هذا مثال بسيط وقد يختلف حسب منطقك)
            WITH RankedRows AS (
                SELECT 
                    ROW_NUMBER() OVER (ORDER BY id) AS new_id,
                    id AS old_id 
                FROM 
                    gym
                ORDER BY 
                    old_id
            )
            UPDATE gym
            SET id = (SELECT new_id FROM RankedRows WHERE old_id = gym.id)
            WHERE id IN (SELECT old_id FROM RankedRows);
    `;

    try {
      await db.execAsync(deleteAndRenumberSQL);

      reloadData();
    } catch (error) {
      console.error("Failed to delete or renumber data:", error);
    }
  };

  if (Platform.OS === "web") {
    await executeDeleteAndRenumber();
  } else {
    Alert.alert("تنبيه", "هل أنت متأكد من حذف هذا العنصر؟", [
      {
        text: "نعم",
        onPress: executeDeleteAndRenumber,
        style: "destructive",
      },
      {
        text: "لا",
        style: "cancel",
      },
    ]);
  }
};
