<?php

namespace App\Tests\Service;

use App\Service\FindNumber;
use PHPUnit\Framework\TestCase;

class FindNumberTest extends TestCase
{

    public function testFindNumbersWithOneMatch()
    {
        $findNumber = new FindNumber();

        $result = $findNumber->find(7, [2, 5, 1, 4]);
        $this->assertTrue($result->getCanAddNumbers());
        $this->assertEquals([0, 1], $result->getIndices());
        $this->assertFalse($result->getMoreThanOneSolution());
    }

    public function testFindNumbersWithoutMatch()
    {
        $findNumber = new FindNumber();

        $result = $findNumber->find(7, [8, 12, 5,1]);
        $this->assertFalse($result->getCanAddNumbers());
        $this->assertEquals([2, 3], $result->getIndices());
        $this->assertFalse($result->getMoreThanOneSolution());
    }

    public function testFindNumbersWithMoreThanOneMatch()
    {
        $findNumber = new FindNumber();

        $result = $findNumber->find(7, [2, 5, 1, 4, 6, 3]);
        $this->assertTrue($result->getCanAddNumbers());
        $this->assertEquals([3, 5], $result->getIndices());
        $this->assertTrue($result->getMoreThanOneSolution());
    }
}