import React from 'react';
import { ListStats, ItemListStats, Text } from './Statistict-styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  countPositiveFeedbackPercentage,
}) {
  return (
    <ListStats>
      <ItemListStats>
        Good:
        <Text>{good}</Text>
      </ItemListStats>
      <ItemListStats>
        Neutral:
        <Text>{neutral}</Text>
      </ItemListStats>
      <ItemListStats>
        Bad:
        <Text>{bad}</Text>
      </ItemListStats>
      <ItemListStats>
        Total:
        <Text>{total}</Text>
      </ItemListStats>
      <ItemListStats>
        Positive feedback:
        {total >= 1 ? (
          <Text>{countPositiveFeedbackPercentage}</Text>
        ) : (
          <Text>0</Text>
        )}
      </ItemListStats>
    </ListStats>
  );
}
