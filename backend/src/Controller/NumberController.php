<?php

namespace App\Controller;

use App\Service\FindNumber;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Psr\Log\LoggerInterface;


class NumberController extends AbstractController
{
    #[Route('/api/find-two-numbers', methods: ['POST'])]
    public function findTwoNumbers(Request $request, ValidatorInterface $validator, FindNumber $findNumber, SerializerInterface $serializer, LoggerInterface $logger): JsonResponse
    {
        $requestData = json_decode($request->getContent(), true);

        $constraints = new Assert\Collection([
            'numbers' => [
                new Assert\Required([
                    new Assert\NotBlank(),
                    new Assert\Type(['type' => 'array']),
                    new Assert\All([
                        'constraints' => [
                            new Assert\Type(['type' => 'integer']),
                        ],
                    ]),
                    new Assert\Count(['min' => 2]),
                ]),
            ],
            'target' => [
                new Assert\Required([
                    new Assert\NotBlank(),
                    new Assert\Type(['type' => 'numeric']),
                ]),
            ],
        ]);

        $violations = $validator->validate($requestData, $constraints);
        if (count($violations) > 0) {
            $errorMessages = [];
            foreach ($violations as $violation) {
                $errorMessages[] = $violation->getPropertyPath() . ': ' . $violation->getMessage();
            }

            $logger->error('find-two-numbers validation error: ' . implode(', ', $errorMessages));
            return new JsonResponse(['error' => $errorMessages], JsonResponse::HTTP_BAD_REQUEST);
        }


        $numbers = $requestData['numbers'];
        $target = $requestData['target'];

        $response = $findNumber->find($target, $numbers);
        $serializedResponse = $serializer->serialize($response, 'json');

        $logger->info('find-two-numbers response: ' . $serializedResponse);
        return new JsonResponse($serializedResponse, JsonResponse::HTTP_OK, [], true);
    }
}