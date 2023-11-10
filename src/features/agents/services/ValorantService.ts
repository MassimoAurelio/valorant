export async function fetchAgentData(agentsClass: string) {
    const response = await fetch('https://valorant-api.com/v1/agents/' + agentsClass);
    const { data } = await response.json();
    return data;
  }