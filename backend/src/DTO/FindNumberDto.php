<?php

namespace App\DTO;


class FindNumberDto
{
    private bool $canAddNumbers;

    private array $indices;

    private bool $moreThanOneSolution;

    public function __construct(bool $canAddNumbers, array $indices, bool $moreThanOneSolution)
    {
        $this->canAddNumbers = $canAddNumbers;
        $this->indices = $indices;
        $this->moreThanOneSolution = $moreThanOneSolution;
    }

    public function getCanAddNumbers(): bool
    {
        return $this->canAddNumbers;
    }

    public function getIndices(): array
    {
        return $this->indices;
    }

    public function getMoreThanOneSolution(): bool
    {
        return $this->moreThanOneSolution;
    }
}
