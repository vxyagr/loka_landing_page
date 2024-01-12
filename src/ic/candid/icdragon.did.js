export const idlFactory = ({ IDL }) => {
  const BookTicketResult = IDL.Variant({
    transferFailed: IDL.Text,
    success: IDL.Nat,
  });
  const GameBonus = IDL.Record({ id: IDL.Nat, bonus: IDL.Nat });
  const Bet = IDL.Record({
    id: IDL.Nat,
    time: IDL.Int,
    walletAddress: IDL.Principal,
    game_id: IDL.Nat,
    dice_1: IDL.Nat8,
    dice_2: IDL.Nat8,
  });
  const CurrentGame = IDL.Record({
    id: IDL.Nat,
    time_created: IDL.Int,
    reward: IDL.Nat,
    bets: IDL.Vec(Bet),
    winner: IDL.Principal,
    bonus: IDL.Nat,
    time_ended: IDL.Int,
  });
  const GameCheck = IDL.Variant({ ok: CurrentGame, none: IDL.Null });
  const PaidTicketPurchase = IDL.Record({
    id: IDL.Nat,
    time: IDL.Int,
    walletAddress: IDL.Opt(IDL.Principal),
    icp_index: IDL.Nat,
    quantity: IDL.Nat,
    totalPrice: IDL.Nat,
  });
  const ClaimHistory = IDL.Record({
    reward_claimed: IDL.Nat,
    time: IDL.Int,
    icp_transfer_index: IDL.Nat,
  });
  const User = IDL.Record({
    gameHistory: IDL.Vec(Bet),
    purchaseHistory: IDL.Vec(PaidTicketPurchase),
    walletAddress: IDL.Principal,
    claimableBonus: IDL.Vec(GameBonus),
    claimableReward: IDL.Nat,
    claimHistory: IDL.Vec(ClaimHistory),
    availableDiceRoll: IDL.Nat,
  });
  const DiceResult = IDL.Variant({
    win: IDL.Null,
    closed: IDL.Null,
    transferFailed: IDL.Text,
    noroll: IDL.Null,
    lose: IDL.Vec(IDL.Nat8),
  });
  const ICDragon = IDL.Service({
    buy_ticket: IDL.Func([IDL.Nat, IDL.Nat, IDL.Nat], [BookTicketResult], []),
    checkBonusPool: IDL.Func([IDL.Principal], [IDL.Vec(GameBonus)], ["query"]),
    claimBonusPool: IDL.Func([IDL.Nat], [IDL.Bool], []),
    claimReward: IDL.Func([IDL.Nat], [IDL.Bool], []),
    clearData: IDL.Func([], [], []),
    firstGame: IDL.Func([], [IDL.Bool], []),
    getCurrentGame: IDL.Func([], [GameCheck], ["query"]),
    getCurrentIndex: IDL.Func([], [IDL.Nat], ["query"]),
    getDevPool: IDL.Func([], [IDL.Principal], ["query"]),
    getRewardPool: IDL.Func([], [IDL.Principal], ["query"]),
    getTicketPrice: IDL.Func([], [IDL.Nat], ["query"]),
    getUserData: IDL.Func([], [User], []),
    isNotPaused: IDL.Func([], [IDL.Bool], ["query"]),
    pauseCanister: IDL.Func([IDL.Bool], [IDL.Bool], []),
    roll_dice: IDL.Func([IDL.Nat], [DiceResult], []),
    setAdmin: IDL.Func([IDL.Principal], [IDL.Principal], []),
    setDevPool: IDL.Func([IDL.Principal], [IDL.Principal], []),
    setEyesToken: IDL.Func([IDL.Bool], [IDL.Bool], []),
    setNextTicketPrice: IDL.Func([IDL.Nat], [IDL.Nat], []),
    setRewardPool: IDL.Func([IDL.Principal], [IDL.Principal], []),
    setTicketPrice: IDL.Func([IDL.Nat], [IDL.Nat], []),
    withdrawICP: IDL.Func([IDL.Nat, IDL.Principal], [IDL.Bool], []),
  });
  return ICDragon;
};
export const init = ({ IDL }) => {
  return [];
};
