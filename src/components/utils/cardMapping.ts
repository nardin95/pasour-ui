// src/utils/cardMapping.ts

export const cardMapping: { [key: number]: { value: number, suit: string } } = {
    1: { value: 1, suit: 'S' }, 2: { value: 2, suit: 'S' }, 3: { value: 3, suit: 'S' },
    4: { value: 4, suit: 'S' }, 5: { value: 5, suit: 'S' }, 6: { value: 6, suit: 'S' },
    7: { value: 7, suit: 'S' }, 8: { value: 8, suit: 'S' }, 9: { value: 9, suit: 'S' },
    10: { value: 10, suit: 'S' }, 11: { value: 11, suit: 'S' }, 12: { value: 12, suit: 'S' },
    13: { value: 13, suit: 'S' },

    14: { value: 1, suit: 'D' }, 15: { value: 2, suit: 'D' }, 16: { value: 3, suit: 'D' },
    17: { value: 4, suit: 'D' }, 18: { value: 5, suit: 'D' }, 19: { value: 6, suit: 'D' },
    20: { value: 7, suit: 'D' }, 21: { value: 8, suit: 'D' }, 22: { value: 9, suit: 'D' },
    23: { value: 10, suit: 'D' }, 24: { value: 11, suit: 'D' }, 25: { value: 12, suit: 'D' },
    26: { value: 13, suit: 'D' },

    27: { value: 1, suit: 'C' }, 28: { value: 2, suit: 'C' }, 29: { value: 3, suit: 'C' },
    30: { value: 4, suit: 'C' }, 31: { value: 5, suit: 'C' }, 32: { value: 6, suit: 'C' },
    33: { value: 7, suit: 'C' }, 34: { value: 8, suit: 'C' }, 35: { value: 9, suit: 'C' },
    36: { value: 10, suit: 'C' }, 37: { value: 11, suit: 'C' }, 38: { value: 12, suit: 'C' },
    39: { value: 13, suit: 'C' },

    40: { value: 1, suit: 'H' }, 41: { value: 2, suit: 'H' }, 42: { value: 3, suit: 'H' },
    43: { value: 4, suit: 'H' }, 44: { value: 5, suit: 'H' }, 45: { value: 6, suit: 'H' },
    46: { value: 7, suit: 'H' }, 47: { value: 8, suit: 'H' }, 48: { value: 9, suit: 'H' },
    49: { value: 10, suit: 'H' }, 50: { value: 11, suit: 'H' }, 51: { value: 12, suit: 'H' },
    52: { value: 13, suit: 'H' },
};

// Function to get card details based on card_id
export function getCardFileName(cardId: number): string {
    const card = cardMapping[cardId];
    if (card) {
        return `${card.value}${card.suit}.svg`;
    }
    return 'Card not found';
}
