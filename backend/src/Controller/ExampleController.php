<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class ExampleController extends AbstractController
{
    #[Route('/api/ping', methods: ['GET', 'HEAD'])]
    public function ping(): JsonResponse
    {
        return $this->json([
            'pong' => floor(microtime(true) * 1000)
        ]);
    }
}