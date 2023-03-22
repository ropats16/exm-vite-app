export async function handle(state, action) {
  const { type, discussion } = action.input;
  if (type === 'createDiscussion' || type === 'addReply') {
    state.discussions[discussion.id] = discussion;
  }
  return { state };
}
