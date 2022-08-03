import { GoogleSheetData, TrelloBoard } from '../types';

const googleSheetToTrelloBoardConversion = (
  googleSheetData: GoogleSheetData
): TrelloBoard => {
  const trelloBoard = Object.values(googleSheetData).map(
    ({ title, columns }) => ({
      name: title,
      cards: columns.map((cardName) => ({ name: cardName })),
    }),
    []
  );

  return trelloBoard;
};

export { googleSheetToTrelloBoardConversion };
