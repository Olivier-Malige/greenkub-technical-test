<?php

namespace App\Service;

use App\DTO\FindNumberDto;

class FindNumber
{
    public function find(int $target, array $numbers): FindNumberDto
    {
        $indices = [];
        $closestIndices = [];
        $closestDifference = PHP_INT_MAX;
        $addedPairs = [];

        foreach ($numbers as $key => $number) {
            foreach ($numbers as $key2 => $number2) {
                if ($key !== $key2 && !in_array([$key2, $key], $addedPairs)) {
                    $sum = $number + $number2;

                    if ($sum === $target) {
                        $indices = [$key, $key2];
                        $addedPairs[] = $indices;
                    } else {
                        $difference = abs($sum - $target);

                        if ($difference < $closestDifference) {
                            $closestDifference = $difference;
                            $closestIndices = [$key, $key2];
                        }
                    }
                }
            }
        }

        $canAddNumbers = !empty($indices);
        $matchedIndices = $canAddNumbers ? $indices : $closestIndices;
        $moreThanOneSolution = count($addedPairs) > 1;

        return new FindNumberDto($canAddNumbers, $matchedIndices, $moreThanOneSolution);
    }
}