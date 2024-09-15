import { CheckCircle2, Plus } from "lucide-react";
import { Button } from "./button";
import { DialogTrigger } from "./dialog";
import { InOrbitIcon } from "./in-orbit-icon";
import { Progress, ProgressIndicator } from "./progress-bar";
import { Separator } from "./separator";
import { OutlineButton } from "./outline-button";
import { useQuery } from "@tanstack/react-query";
import { getSummary } from "../../../http/get-summary";
import dayjs from "dayjs";
import ptBR from "dayjs/locale/pt-BR";

dayjs.locale(ptBR);

export function Summary() {
	const { data } = useQuery({
		queryKey: ["summary"],
		queryFn: getSummary,
		staleTime: 1000 * 60, //sixty seconds
	});

	if (!data) {
		return null;
	}

	const firstDayOfWeek = dayjs().startOf("week").format("D MMM");
	const lastDayOfWeek = dayjs().endOf("week").format("D MMM");

	const percentualDeCompletos = Math.round((data.completed * 100) / data.total);

	return (
		<div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-3">
					<InOrbitIcon />
					<span className="text-lg font-semibold capitalize">
						{firstDayOfWeek} - {lastDayOfWeek}
					</span>
				</div>
				<DialogTrigger asChild>
					<Button size="sm">
						<Plus className="size-4" />
						Cadastrar meta
					</Button>
				</DialogTrigger>
			</div>

			<div className="flex flex-col gap-3">
				<Progress value={data?.completed} max={data?.total}>
					<ProgressIndicator style={{ width: `${percentualDeCompletos}%` }} />
				</Progress>
			</div>

			<div className="flex items-center justify-between text-xs text-zinc-400">
				<span>
					Você completou <span className="text-zinc-100">{data.completed}</span>{" "}
					de <span className="text-zinc-100">{data.total}</span> metas nessa
					semana.
				</span>
				<span>{percentualDeCompletos}%</span>
			</div>

			<Separator />

			<div className="flex flex-wrap gap-3 ">
				<OutlineButton>
					<Plus className="size-4 text-zinc-600" />
					Meditar
				</OutlineButton>
				<OutlineButton>
					<Plus className="size-4 text-zinc-600" />
					Treinar
				</OutlineButton>
				<OutlineButton>
					<Plus className="size-4 text-zinc-600" />
					Estudar
				</OutlineButton>
				<OutlineButton>
					<Plus className="size-4 text-zinc-600" />
					Dormir bem
				</OutlineButton>
				<OutlineButton>
					<Plus className="size-4 text-zinc-600" />
					Escrever código
				</OutlineButton>
			</div>

			<div className="flex flex-col gap-6">
				<h2 className="text-xl">Sua Semana</h2>

				{Object.entries(data.goalsPerDay).map(([data, metas]) => {
					const weekDay = dayjs(data).format("dddd");
					return (
						<div key={data} className="flex flex-col gap-4">
							<h3 className="font-medium capitalize">
								{weekDay}{" "}
								<span className="text-zinc-400 text-xs">(15 de setembro)</span>
							</h3>

							<ul className="flex flex-col gap-3">
								<li className="flex items-center gap-2">
									<CheckCircle2 className="size-4 text-pink-500" />
									<span className="text-sm text-zinc-400">
										Você completou{" "}
										<span className="text-zinc-100">"Acordar cedo"</span> às{" "}
										<span className="text-zinc-100">08:13h</span>{" "}
									</span>
								</li>
								<li className="flex items-center gap-2">
									<CheckCircle2 className="size-4 text-pink-500" />
									<span className="text-sm text-zinc-400">
										Você completou{" "}
										<span className="text-zinc-100">"Aprender React"</span> às{" "}
										<span className="text-zinc-100">00:45h</span>
									</span>
								</li>
							</ul>
						</div>
					);
				})}
			</div>
			<div className="flex flex-col gap-6">jkh</div>
		</div>
	);
}

//no começo do map é obrigatório que o primeiro elemento sendo retornado receba o atributo "key" e o valor deve ser um parâmetro único dentro daquela estrutura, nesse caso foi a 'data' pois esse parâmetro não vai ter diferentes valores dentro da mesma interação.

//lucide-react --> lib de icones no react

//Object.entries(data.goalsPerDay) --> vai retornar as chaves e os valores que tão dentro dessa chave (que também é um objeto).

//no React, sempre tem que ser um map ao invés de um forEach, pois o forEach funciona como uma simples estrutura de repetição que não pode retornar nada
